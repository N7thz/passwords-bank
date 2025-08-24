"use client"

import { editPassword } from "@/actions/edit-password"
import { findPasswordById } from "@/actions/find-password-by-id"
import { InputPassWord } from "@/components/input-password"
import { SpanErrorMessage } from "@/components/span-error"
import { Button } from "@/components/ui/button"
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { generatePassword } from "@/functions/generate-password"
import { cn } from "@/lib/utils"
import {
    RegisterPasswordProps,
    registerPasswordSchema
} from "@/schemas/register-password-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Password } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "../toast"
import { redirect, useRouter } from "next/navigation"

export const FormEditPassword = ({ id }: { id: string }) => {

    const {
        data: password,
        isLoading,
        status,
        refetch,
    } = useQuery({
        queryKey: ["find-password-by-id", id],
        queryFn: async () => findPasswordById(id),
    })

    if (isLoading) {
        return (
            <>
                <CardContent className="space-y-4">
                    {Array.from({ length: 4 }).map((_, index, array) => (
                        <Skeleton
                            key={index}
                            className={cn(
                                index === 0
                                    ? "w-3/4"
                                    : `w-${index}/${array.length}`
                            )}
                        />
                    ))}
                </CardContent>
                <CardFooter>
                    <Button
                        disabled
                        className="w-full"
                    >
                        Confirm
                    </Button>
                </CardFooter>
            </>
        )
    }

    if (status === "error" || !password) {
        return (
            <>
                <CardHeader>
                    <CardDescription>
                        Error fetching password.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button
                        className="w-full"
                        onClick={() => refetch()}
                    >
                        Retry
                    </Button>
                </CardFooter>
            </>
        )
    }

    return <EditPassword password={password} />
}

export const EditPassword = ({ password }: { password: Password }) => {

    const form = useForm<RegisterPasswordProps>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            ...password,
            confirmPassword: password.password
        },
        resolver: zodResolver(registerPasswordSchema),
    })

    const {
        setValue,
        watch,
        register,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = form

    const { id } = password

    const { push } = useRouter()

    async function onSubmit({
        account, password, site
    }: RegisterPasswordProps) {

        await editPassword(id, {
            account,
            password,
            site
        }).then(() => toast({
            title: "Success",
            description: "Password updated successfully",
            onAutoClose: () => push("/home")
        })).catch(() => toast({
            title: "Error",
            description: "Failed to update password",
            variant: "error"
        }))
    }

    return (
        <>
            <CardContent>
                <Form {...form}>
                    <form
                        id="edit-password-form"
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="space-y-0.5">
                            <InputPassWord
                                password={watch("password")}
                                placeholder="Enter your password"
                                className={cn(
                                    dirtyFields.password &&
                                    !errors.password && [
                                        "focus-visible:ring-primary",
                                        "not-focus-visible:border-primary",
                                    ],
                                    errors.password && [
                                        "focus-visible:ring-destructive",
                                        "not-focus-visible:border-destructive",
                                    ],
                                )}
                                {...register("password")}
                            />
                            <Button
                                type="button"
                                variant={"link"}
                                className="p-0"
                                onClick={() => generatePassword(setValue)}
                            >
                                Gerar senha Forte
                            </Button>
                            {errors.password && (
                                <SpanErrorMessage
                                    message={errors.password.message}
                                />
                            )}
                        </div>
                        <div className="space-y-0.5">
                            <InputPassWord
                                type="confirmPassword"
                                password={watch("confirmPassword")}
                                placeholder="Confirm your password"
                                className={cn(
                                    dirtyFields.confirmPassword &&
                                    !errors.confirmPassword && [
                                        "focus-visible:ring-primary",
                                        "not-focus-visible:border-primary",
                                    ],
                                    errors.confirmPassword && [
                                        "focus-visible:ring-destructive",
                                        "not-focus-visible:border-destructive",
                                    ],
                                )}
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <SpanErrorMessage message={errors.confirmPassword.message} />
                            )}
                        </div>
                        <div className="space-y-0.5">
                            <Input
                                placeholder="Enter the site"
                                className={cn(
                                    dirtyFields.site &&
                                    !errors.site && [
                                        "focus-visible:ring-primary",
                                        "not-focus-visible:border-primary",
                                    ],
                                    errors.site && [
                                        "focus-visible:ring-destructive",
                                        "not-focus-visible:border-destructive",
                                    ],
                                )}
                                {...register("site")}
                            />
                            {errors.site && <SpanErrorMessage message={errors.site.message} />}
                        </div>
                        <div className="space-y-0.5">
                            <Input
                                placeholder="Enter your account"
                                className={cn(
                                    dirtyFields.account &&
                                    !errors.account && [
                                        "focus-visible:ring-primary",
                                        "not-focus-visible:border-primary",
                                    ],
                                    errors.account && [
                                        "focus-visible:ring-destructive",
                                        "not-focus-visible:border-destructive",
                                    ],
                                )}
                                {...register("account")}
                            />
                            {errors.account && (
                                <SpanErrorMessage message={errors.account.message} />
                            )}
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button
                    type="submit"
                    form="edit-password-form"
                    className="w-full"
                >
                    Confirm
                </Button>
            </CardFooter>
        </>
    )
}

