export type ModalType = 'full-screen' | 'left' | 'right';

export interface IModalConfig<TComponent, TData> {
    type: ModalType;
    hasBackdrop?: boolean;
    data?: TData;
    component: TComponent;
}
