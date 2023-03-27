import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';



// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    return (
        <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>


            <figure class="text-end">
                <blockquote class="blockquote">
                    <p>Bibliothèque</p>
                </blockquote>
                <figcaption class="blockquote-footer">

                    <p> <cite title="Source Title">EST Oujda</cite></p>
                </figcaption>
            </figure>
        </ButtonBase>
    );
};

export default LogoSection;
