export interface Command {
    input: string;
    output: React.ReactNode;
}

export interface FeatureProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export enum BootState {
    BIOS,
    KERNEL_LOAD,
    SYSTEM_CHECK,
    READY
}