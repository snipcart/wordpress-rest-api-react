import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Copyright() {
    return (
        <div>
        <Typography variant="body2" color="textSecondary" align="center">
            Made with <FavoriteIcon /> by the folks at {' '}
            <Link href="https://snipcart.com/">
                Snipcart
            </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
            Checkout the {' '}
            <Link href="https://github.com/snipcart/wordpress-rest-api-react">
                Github repo
            </Link>
            {' '} or read the {' '}
            <Link href="https://snipcart.com/blog/reactjs-wordpress-rest-api-example">
                blog post
            </Link>!
        </Typography>
        </div>
    );
}