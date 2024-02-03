import { CheckCircleOutlineRounded } from "@mui/icons-material";

interface FormSuccessProps {
    message?: string,
}

export const FormSuccess = ({
    message
}: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-green-500/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <CheckCircleOutlineRounded className="h-5 w-5" />
            <p>{message}</p>
        </div>
    )
}