import styles from './Settings.module.scss';
import { SettingsProps } from './Settings.props';
import cn from 'classnames';
import { FC, useEffect } from 'react';
import CloudIcon from './cloud.svg';
import { Setting } from '../../ui';
import { Switch } from 'antd';
import './Settings.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTheme } from '../../store/slices/ThemeSlice/ThemeSlice';

export const Settings: FC<SettingsProps> = ({ className, ...props }) => {
	const avatar = { img: '', color: 'yellow' };
	const name = 'Igor';
	const { theme } = useAppSelector((state) => state.themeReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.theme = theme;
	}, [theme]);

	return (
		<div className={cn(className, styles.Settings)} {...props}>
			<div className={styles.user}>
				<div
					style={{
						backgroundColor: avatar.img ? undefined : avatar.color,
					}}
					className={styles.avatarWrapper}>
					{avatar.img ? (
						<img
							src={avatar.img}
							alt="Avatar"
							className={styles.avatar}
						/>
					) : (
						<span className={styles.firstLetter}>
							{name[0]?.toUpperCase()}
						</span>
					)}
				</div>
				<span>{name}</span>
			</div>
			<div className={styles.allSettings}>
				<Setting
					icon={<CloudIcon />}
					color={'green'}
					string={'Палитра'}
				/>
				<Setting
					icon={<CloudIcon />}
					color={'#4DC54D'}
					string={'Палитра'}
				/>
				<div className={styles.blackOn}>
					<Switch
						defaultChecked={localStorage.theme === 'black'}
						onChange={() => {
							if (theme === 'default')
								dispatch(setTheme('black'));
							if (theme === 'black')
								dispatch(setTheme('default'));
						}}
					/>
					Темная тема
				</div>
			</div>
		</div>
	);
};
