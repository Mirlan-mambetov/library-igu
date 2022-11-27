import { IField } from '../Field/Fiedl.props'
import { TextareaHTMLAttributes } from 'react'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & IField

export interface ITextArea extends TypeInputPropsField {}
