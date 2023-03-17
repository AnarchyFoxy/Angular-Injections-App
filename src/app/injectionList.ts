import { InjectionItem } from "./injectionItem";
export class InjectionList
{
    constructor(public user: string, private injectionItems: InjectionItem[] = [])
    {}

    get items(): readonly InjectionItem[]
    {
        return this.injectionItems;
    }

    addItem(task: string)
    {
        this.injectionItems.push(new InjectionItem(task))
    }
}