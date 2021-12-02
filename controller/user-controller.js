import user from '../model/userSchema.js'

export const getUsers = (request, response) => {
  response.status(200).json('Hi All')
}

export const addUsers = async (request, response) => {
  console.log('Hello from the Hell')
  response.send('Hi All 2')
  const user = request.body;
  const newUser = new User(user)

  try {
    await newUser.save()  //  save is an asynhronous function
    response.json(newUser)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const getUserById = async (request, response) => {
  const id = request.params.id;

  try {
    const user = await User.findById(id)
    response.json(user)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const editUser = async (request, response) => {
  const user = request.body
  const editUser = new User(user)
  try {
    await User.updateOne({ _id: request.params.id }, editUser)
    response.json(editUser)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const deleteUser = async (request, response) => {
  // const user = request.body
  // const deleteUser = new User(user)
  try {
    await User.deleteOne({ _id: request.params.id })
    response.json('User Deleted Successfully')

  } catch (error) {
    response.json({ message: error.message })
  }
}