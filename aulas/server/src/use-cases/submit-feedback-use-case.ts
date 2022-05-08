import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
         private feedbacksRepository: FeedbacksRepository,
         private mailAdapter: MailAdapter,
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (!type || !comment) {
            throw new Error('Type and comment are required');
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Feedback do usuário',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;"></div>`,
                `<p> Tipo de feedback: ${type} </p>`,
                `<p> Comentário: ${comment} </p>`,
                screenshot ? `<img  src ${screenshot} />`: '',

            ].join('\n')
        })
    }
}