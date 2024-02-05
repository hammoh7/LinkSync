import { ErrorOutlineRounded } from "@mui/icons-material"
import { CardWrapper } from "./card-wrapper"

export const ErrorCard = () => {
    return (
        <CardWrapper
          headerLabel="Something went wrong!"
          backButtonHref="/login"
          backButtonLabel="Try again"
        >
            <div className="w-full flex items-center justify-center">
                <ErrorOutlineRounded className="text-destructive" />
            </div>  
        </CardWrapper>
    )
}