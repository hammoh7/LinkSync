import { ReportProblem } from "@mui/icons-material";

interface FormErrorProps {
    message?: string,
}

export const FormError = ({
    message
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <ReportProblem className="h-5 w-5" />
            <p>{message}</p>
        </div>
    )
}