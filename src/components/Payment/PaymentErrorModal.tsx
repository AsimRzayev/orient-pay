import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Button,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'
interface IProps {
    isOpen: boolean
    onClose: () => void
}
const PaymentErrorModal: React.FC<IProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(ROUTES.PAYMENTS)
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Uğursuz əməliyyat</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Error verdi</ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                                onClose()
                                handleNavigate()
                            }}
                        >
                            Close
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                onClose()
                                handleNavigate()
                            }}
                        >
                            Davam et
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PaymentErrorModal
