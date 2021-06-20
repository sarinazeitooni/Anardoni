import React from'react';
import style from './scss/feedback.module.scss';
import MoodIcon from '@material-ui/icons/Mood';
import messages from "../Details/items/messages/messages";
const FeedBack = () => {
    return (
        <React.Fragment>
            <div className={style['feedback-container']}>
                <MoodIcon/>
                <span>{messages.feedback}</span>
            </div>
        </React.Fragment>
    )
};
export default FeedBack;