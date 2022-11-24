import { Addon, Graph } from "@antv/x6";
export default class FlowGraph {
    static graph: Graph;
    static stencil: Addon.Stencil;
    static init(): {
        graph: Graph;
        stencil: Addon.Stencil;
    };
}
