import { Addon, Graph } from "@antv/x6";
import { initGraph } from "./initGraph";
import { initStencil } from "./initStencil";

export default class FlowGraph {
    public static graph:Graph;
    public static stencil: Addon.Stencil;
    
    public static init(){
       this.graph = initGraph();
       this.stencil = initStencil(this.graph);
       return this.graph;
    }
}