import DesktopScreen from "./DesktopScreen";
import MobileScreen from "./MobileScreen";

const NavbarScreen = () => {
    return (
        <>
            <div className="hidden lg:flex w-full px-8 py-4">
                <DesktopScreen />
            </div>
            <div className="flex flex-col w-full gap-4 lg:hidden">
                <MobileScreen />
            </div>
        </>
    );
}
 
export default NavbarScreen;