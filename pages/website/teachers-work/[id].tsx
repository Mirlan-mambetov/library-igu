import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import TeachersList from '../../../components/UI/Teachers/TeachersList'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { tokens } from '../../../theme'
import { Pagination, Stack, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useState } from 'react'

const TeachersWork: NextPage = () => {
	const { query } = useRouter()
	const categoryId = query ? query.id : null

	if (!categoryId) return null

	const { data: category } = teachersApi.useFetchOneCategoryQuery(+categoryId, {
		skip: !categoryId
	})

	return (
		<Layout title={`Категория: ${category ? category?.name : ''}`}>
			{category && <TeachersList data={category} />}
		</Layout>
	)
}
export default TeachersWork
