import MenuItem from './MenuItem/MenuItem'
import { IMenuItem } from './MenuItem/MenuItem.props'
import { List } from '@mui/material'
import { FC } from 'react'

export const Menu: FC<{ data: IMenuItem[] }> = ({ data }) => {
	return (
		<List>
			{data.map(menu => (
				<MenuItem data={menu} key={menu.name} />
			))}
		</List>
	)
}
