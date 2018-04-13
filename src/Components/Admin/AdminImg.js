import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Reducer/redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class AdminImg extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedImgCloudinaryUrl: ''
        }
        this.onImageDrop = this.onImageDrop.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    onImageDrop(files){
        this.setState({
            uploadedFile: files[0]
        })
        this.handleImageUpload(files[0])
    }

    handleImageUpload(file){
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ourfamily/image/upload';
        const CLOUDINARY_UPLOAD_PRESET = 'rabaswn5';
        
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)

        upload.end((err, response) => {
            if (err) {
                alert('There was an error with the upload. Please try again.')
                window.location.reload();
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedImgCloudinaryUrl: response.body.secure_url
                })
            }
        })
    }

    render() {
        return (
            <div className="upload-img-container">

                <Dropzone
                    className="dropzone"
                    multiple={false}
                    accept='image/*'
                    onDrop={this.onImageDrop.bind(this)}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
                <div className="FileUpload">
                </div>

                <div>
                    {this.state.uploadedImgCloudinaryUrl === '' ? null :
                        <div>
                            <p>Image Name: {this.state.uploadedFile.name}</p>
                            <img className="family-img" src={this.state.uploadedImgCloudinaryUrl} />
                        </div>
                    }
                </div>
            </div>
        )
    }


}

// function mapStateToProps(state) {
//     return {
//         user: {}
//     }
// }

// export default connect(mapStateToProps, { getUserInfo })(AdminImg);