export interface MenuItem { name: string; icon?: React.ReactElement; route: string; }
export interface MenuItems extends MenuItem { children?: MenuItems[]; }