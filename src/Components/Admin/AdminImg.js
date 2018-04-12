import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Reducer/redux';
import FamilyImage from '../../assets/family.jpg';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL;

export default class AdminImg extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedImgCloudinaryUrl: ''
        }
    }

    onImageDrop = (file) => {
        this.setState({
            uploadedFile: file[0]
        })
        this.handleImageUpload(file[0])
    }

    handleImageUpload = (file) => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        .field('file', file)

        upload.end((err, response) => {
            if(err){
                console.log(err)
                alert('There was an error with the upload. Please try again.')
            }

            if(response.body.secure_url !== ''){
                this.setState({
                    uploadedImgCloudinaryUrl: response.body.secure_url
                })
            }
        })
    }

    render() {
        // const {familyImage} = this.state
        <Dropzone
            multiple={false}
            accept='image/*'
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        return (
            <div className="upload-img-container">
                <div className="FileUpload">
                ...
                </div>

                <div>
                    {this.state.uploadedImgCloudinaryUrl === '' ? null : 
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img src={this.state.uploadedImgCloudinaryUrl} />
                    </div>
                    }
                </div>

                {/* <form onSubmit={this.fileUpload} className="family-img-upload">
                    <input type="file" name="FamilyImg" accept="image/*" onChange={this.handleUpload} />
                    <input type="submit" />
                </form> */}
                {/* <section className="family-img">
                    <img src={familyImage} height="200px" width="100%" alt="family" />
                </section> */}
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