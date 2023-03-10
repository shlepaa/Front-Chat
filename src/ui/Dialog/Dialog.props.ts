import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IAvatar } from '../../interfaces';

export interface DialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	avatar: IAvatar;
	lastMes?: string;
	dateLastMes?: string;
}
