export type EnvironmentType = 'prod' | 'dev' | 'debug' | 'prod-old';
export type LogoColor = '#2D2D32' | '#0064ff' | '#d84848' | '#2abd3d';
export const LOGO_COLORS = {
    debug: '#d84848' as LogoColor,
    dev: '#0064ff' as LogoColor,
    prod: '#2D2D32' as LogoColor,
    prodOld: '#2abd3d' as LogoColor
};

export interface IEnvironment {
    type: EnvironmentType;
    logoColor: LogoColor;
}
