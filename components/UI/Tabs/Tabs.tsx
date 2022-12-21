import { ITabs } from '../../../interfaces/tabs.interface'
import { tabsApi } from '../../../store/api/tabs/tabs.api'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export const Tabs: FC<{ tabs: ITabs[]; title?: string }> = ({
	tabs,
	title
}) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [deleteTabLink] = tabsApi.useDeleteTabLinkMutation()

	return (
		<Box>
			<Typography
				variant='h5'
				color={colors.blueAccent[700]}
				sx={{ my: '20px' }}
			>
				{title}
			</Typography>
			{tabs.map((tab) => (
				<Accordion key={tab.id}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Box sx={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
							<Typography>{tab.title}</Typography>
							<UpdateFragment fragmentUpdate='UpdateTab' id={tab.id} />
						</Box>
					</AccordionSummary>
					<AccordionDetails sx={{ position: 'relative' }}>
						{tab.description && <Typography>{tab.description}</Typography>}
						{tab.isLink?.map((link) => (
							<Box
								key={link.id}
								sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}
							>
								<a
									href={`${process.env.NEXT_PUBLIC_APP_STATIC}/${link.link}`}
									style={{
										margin: '12px 0px',
										color: `${colors.redAccent[400]}`
									}}
									target='_blank'
								>
									<Typography>{link.name}</Typography>
								</a>
								<UpdateFragment fragmentUpdate='UpdateTabLink' id={link.id} />
								<Button
									sx={{ fontSize: '10px' }}
									color='warning'
									onClick={() => deleteTabLink(link.id)}
								>
									удалить
								</Button>
							</Box>
						))}
						<CreateFragment fragmentCreate='CreateTabLink' id={tab.id} />
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	)
}
