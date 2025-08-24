import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Password } from "@prisma/client"
import { format as formatDate } from "date-fns"
import { Copy, EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { DropPasswordAction } from "./drop-password-action"

export const CardPassword = ({
  password: { id, createdAt, site, account, password },
}: {
  password: Password
}) => {

  const [visible, setVisible] = useState(false)

  const Icon = visible ? EyeOffIcon : EyeIcon

  async function onCopy() {
    await navigator.clipboard.writeText(password)

    toast({
      title: "Senha copiada",
      description: "O texto foi copiado para a área de transferência.",
      icon: <Copy className="size-4" />,
    })
  }

  return (
    <Card className="border-primary size-full">
      <CardHeader>
        <CardTitle className="text-xl capitalize">{site}</CardTitle>
        <CardDescription>
          Created at {formatDate(createdAt, "dd 'de' MMMM 'de' yyyy")}
        </CardDescription>
        <CardAction>
          <DropPasswordAction id={id} />
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <Input value={account} readOnly />
        </div>
        <div className="flex items-center justify-between gap-4">
          {visible ? (
            <Input value={password} readOnly />
          ) : (
            <Skeleton className={cn(
              "h-9 rounded-lg animate-pulse animate-duration-[1.5s]",
            )} />
          )}
          <div className="flex gap-2">
            <Button
              size={"icon"}
              onClick={() => setVisible((visible) => !visible)}
            >
              <Icon />
            </Button>
            <Button 
            size={"icon"} 
            onClick={onCopy}
            className="cursor-copy"
            >
              <Copy />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
