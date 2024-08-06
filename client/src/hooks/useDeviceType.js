import { useMediaQuery } from 'react-responsive';
import theme from "../styles/theme";


const useDeviceType = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakpoints.mobile})` });
    const isTablet = useMediaQuery({ query: `(min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet})` });

    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
};

export default useDeviceType;