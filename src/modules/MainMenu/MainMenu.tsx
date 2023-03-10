import styles from './MainMenu.module.scss';
import { MainMenuProps } from './MainMenu.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { Settings } from '../../components';
import { Dialog, Hamburger, Search } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentDialog } from '../../store/slices/CurrentUserSlice/CurrentUserSlice';
import { TintedBg } from '../../ui/TintedBg/TintedBg';

export const MainMenu: FC<MainMenuProps> = ({ className, ...props }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const { user, currentDialog } = useAppSelector(
		(state) => state.currentUserReducer
	);
	const dispatch = useAppDispatch();

	return (
		<>
			<div
				style={{ zIndex: 5 }}
				className={cn(className, styles.MainMenu)}
				{...props}>
				<Settings
					className={cn(styles.settings, {
						[styles.opened]: isOpened,
					})}
				/>

				<div className={styles.searchAndMenu}>
					<Hamburger onClick={() => setIsOpened(true)} />
					<Search className={styles.search} />
				</div>

				<div className={styles.dialogs}>
					{user.dialogs &&
						user.dialogs.map((d) => (
							<Dialog
								onClick={() => {
									if (currentDialog.id === d.id)
										dispatch(setCurrentDialog({}));
									if (currentDialog.id !== d.id)
										dispatch(setCurrentDialog(d));
								}}
								key={d.id}
								className={cn({
									[styles.chosen]: currentDialog.id === d.id,
								})}
								avatar={d.avatar}
								name={d.name}
								lastMes={d.lastMes}
								dateLastMes={d.dateLastMes}
							/>
						))}
				</div>
			</div>
			<TintedBg
				zIndex={4}
				cursor="pointer"
				state={isOpened}
				onClick={() => setIsOpened(false)}
			/>
		</>
	);
};
