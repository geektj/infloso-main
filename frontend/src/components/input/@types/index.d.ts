export interface InputProps {
    label: string;
    value: string | boolean;
    placeholder?: string;
    type: string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean
}