import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IField {
	error?: FieldError
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IField
export interface FieldProps extends TypeInputPropsField {}
