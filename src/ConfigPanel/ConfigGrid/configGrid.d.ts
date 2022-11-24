/// <reference types="react" />
interface IProps {
    attrs: {
        [key: string]: any;
    };
    setAttr: (key: string, value: any) => void;
}
export default function (props: IProps): JSX.Element;
export {};
