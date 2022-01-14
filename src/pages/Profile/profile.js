import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { showToastTimer } from '../../redux/actions'
import { updateUserProfile } from '../../redux/apis'
// import swal from 'sweetalert'

export const ProfileLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    collegeName: '',
    gender: '',
  })

  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userRegister)

  // If user is already logged in Do not show this page
  // or redirect to complete - profile page if not already registered with social auth
  useEffect(() => {
    if (userInfo) {
      navigate('/profile')
    }
  }, [userInfo, navigate, loading])

  // show error message
  useEffect(() => {
    if (error) {
      // swal('Error', error, 'error')
      dispatch(showToastTimer(error, 'error'))
    }
  }, [error, dispatch])

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    dispatch(
      updateUserProfile({
        name: formData.name,
        college: formData.collegeName,
        phone: formData.number,
        gender: formData.gender,
      })
    )
  }

  return {
    handleChange,
    formData,
    error,
    loading,
    handleSubmit,
  }
}
