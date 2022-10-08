import { FC } from "react"
import { ListGroup } from "../../interfaces/Listgroup.props"
import { ListItemGroup } from "./ListItemGroup/ListItemGroup"

export const Listgroup: FC<ListGroup> = ({ menu, icon, ...props }): JSX.Element => {
  return (
    <ul {...props}>
      {menu.map(m => (
        <ListItemGroup key={m.id} href={m.href} icon={icon}>{m.name}</ListItemGroup>
      ))}
    </ul>
  )
}
