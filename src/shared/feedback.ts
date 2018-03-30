export interface Feedback{
    firstname: string;
    lastname: string;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export const ContactType =['None', 'Tel', 'Email']