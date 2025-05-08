import { FormResumeCv } from "../presentational/FormResumeCv"
import { PreviewResumeCv } from "../presentational/PreviewResumeCv"

export const ContainerResumeCv = () => {
    return (
        <>
            <section >
                <div className="wrapper-form container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <FormResumeCv />
                        <PreviewResumeCv />
                    </div>
                </div>
            </section>
        </>
    )
}