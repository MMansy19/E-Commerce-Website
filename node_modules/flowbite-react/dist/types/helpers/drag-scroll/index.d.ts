import type { CSSProperties, ElementType, ReactNode, Ref, RefObject } from "react";
import { PureComponent } from "react";
export interface ScrollEvent {
    external: boolean;
}
export interface ScrollContainerProps {
    vertical?: boolean;
    horizontal?: boolean;
    hideScrollbars?: boolean;
    activationDistance?: number;
    children?: ReactNode;
    onStartScroll?: (event: ScrollEvent) => void;
    onScroll?: (event: ScrollEvent) => void;
    onEndScrolll?: (event: ScrollEvent) => void;
    onClick?: (event: MouseEvent) => void;
    className?: string;
    draggingClassName?: string;
    style?: CSSProperties;
    ignoreElements?: string;
    nativeMobileScroll?: boolean;
    ref?: ReactNode;
    component?: ElementType;
    innerRef?: Ref<HTMLElement>;
    stopPropagation?: boolean;
    buttons?: number[];
}
export interface ScrollEvent {
    external: boolean;
}
interface Props {
    vertical?: boolean;
    horizontal?: boolean;
    hideScrollbars?: boolean;
    activationDistance?: number;
    children?: ReactNode;
    onStartScroll?: (event: ScrollEvent) => void;
    onScroll?: (event: ScrollEvent) => void;
    onEndScroll?: (event: ScrollEvent) => void;
    onClick?: (event: MouseEvent) => void;
    className?: string;
    draggingClassName?: string;
    style?: CSSProperties;
    ignoreElements?: string;
    nativeMobileScroll?: boolean;
    ref?: ReactNode;
    innerRef?: Ref<HTMLElement>;
    stopPropagation?: boolean;
    buttons?: number[];
}
export default class ScrollContainer extends PureComponent<Props> {
    static defaultProps: {
        nativeMobileScroll: boolean;
        hideScrollbars: boolean;
        activationDistance: number;
        vertical: boolean;
        horizontal: boolean;
        stopPropagation: boolean;
        style: {};
        buttons: number[];
    };
    container: RefObject<HTMLElement>;
    scrolling: boolean;
    started: boolean;
    pressed: boolean;
    isMobile: boolean;
    internal: boolean;
    scrollLeft?: number;
    scrollTop?: number;
    clientX?: number;
    clientY?: number;
    constructor(props: ScrollContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getElement(): HTMLElement | null;
    isMobileDevice(): boolean;
    isDraggable(target: HTMLElement): boolean;
    isScrollable(): boolean | null;
    onEndScroll: () => void;
    onScroll: () => void;
    onTouchStart: (e: TouchEvent) => void;
    onTouchEnd: () => void;
    onTouchMove: (e: TouchEvent) => void;
    onMouseDown: (e: MouseEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: (e: MouseEvent) => void;
    processClick(clientX: number, clientY: number): void;
    processStart(changeCursor?: boolean): void;
    processScroll(): void;
    processMove(newClientX: number, newClientY: number): void;
    processEnd(): void;
    getRef(el: HTMLDivElement): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
