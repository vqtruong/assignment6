import React from 'react';
import "./styles.css"

function Modal( { modalContent }) {


    function format(str) {
        if (str === null || str === undefined) {
            str = "n/a";
        }
        return str;
    }

    return (
        <div className="repository col-3">
            <div className="modal fade" id="profileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary" id="exampleModalLabel">{ modalContent.title }</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <span className="font-weight-bold">Company: </span> 
                            { format(modalContent.company) }
                        </div>

                        <div>
                            <span className="font-weight-bold">Blog: </span> 
                            { format(modalContent.blog) } 
                        </div>

                        <div>
                            <span className="font-weight-bold">Twitter: </span> 
                            { format(modalContent.twitter_username) } 
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
