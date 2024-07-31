
export interface ProjectSummary {
    id : number;
    image :string;
    title : string;
    summary : string;
}

export interface ProjectDetail {
    id : number,
    name : string,
    activity : string,
    summary : string,
    isOnline : boolean,
    links : Link[],
    images : string[],
    context : string,
    solutio: Solution,
    work : Work,
    technos : Techno[]
}

export interface Link {
    type: string,
    link : string
}

export interface Solution {
    intro : string,
    proposals : Proposal[]
}

export interface Proposal {
    type: string,
    lists : PropossalList[]
}

export interface PropossalList{
    header : string,
    detail : string
}

export interface Work {
    intro : string,
    steps : Step[]
}

export interface Step {
    icon : string,
    header : string,
    texts : string[]
}

export interface Techno {
    name : string,
    image : string
}