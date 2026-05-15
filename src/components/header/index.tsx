
import { Bell, HeartPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { HeaderContainer } from "./styles"

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>KG</AvatarFallback>
                </Avatar>
                <HeartPlus />
            </HeaderContainer>
        </>
    )
}