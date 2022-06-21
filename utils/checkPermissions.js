import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
    console.log(resourceUserId.toString)
    console.log(requestUser.userId)
    if (requestUser.userId !== resourceUserId.toString()) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

export default checkPermissions