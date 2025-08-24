import { CheckCircle, XCircle } from "lucide-react"
import { toast as toastPrimitive, type ExternalToast } from "sonner"

type ToastProps = ExternalToast & {
	title: string
	variant?: "success" | "error"
}

export const toast = (
	{ title, variant = "success", ...props }: ToastProps,
) => toastPrimitive(title, {
	duration: 2000,
	style: {
		border: `1px solid ${variant === "success" ? "oklch(50.8% 0.118 165.612)" : "var(--destructive)"}`,
	},
	icon:
		variant === "success" ? (
			<CheckCircle className="size-4 text-sucess" />
		) : (
			<XCircle className="size-4 text-destructive" />
		),
	...props,
})
