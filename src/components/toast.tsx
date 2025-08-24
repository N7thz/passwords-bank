import { CheckCircle, XCircle } from "lucide-react";
import { toast as toastPrimitive, type ExternalToast } from "sonner";

type ToastProps = ExternalToast & {
	title: string;
	variant?: "success" | "error";
};

export const toast = (
	{ title, variant = "success", ...props }: ToastProps,
	p0?: unknown,
) =>
	toastPrimitive(title, {
		className: "border-primary",
		duration: 2000,
		icon:
			variant === "success" ? (
				<CheckCircle className="size-4 text-sucess" />
			) : (
				<XCircle className="size-4 text-destructive" />
			),
		...props,
	});
