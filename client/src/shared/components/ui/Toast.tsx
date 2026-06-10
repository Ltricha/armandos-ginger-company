interface ToastProps {
  id: number;
  type: ToastNotification;
  message: string;
}

enum ToastNotification {
  success = "success",
  error = "error",
  info = "info",
}
// success, error, info

export default function Toast(props: ToastProps) {
  const DURATION = 5;

  return (
    <div className="hidden">
      <span>{props.message}</span>
    </div>
  );
}
