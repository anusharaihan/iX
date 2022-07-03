import React, {useState, useEffect} from 'react'

import Button from '../common/Button';
import ProfileService from '../../services/profile.service'
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';


export default function ProfilePage(props) {

    const [profile, setProfile] = useState(null);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState(40);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);

    const [error, setError] = useState('');
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetchProfile();
    }, []);

    async function fetchProfile() {
        setFetching(true);
        try {
            const profile = await ProfileService.fetchProfile(props.user);
            setProfile(profile);
            setName(profile.name || '');
            setSurname(profile.surname || '');
            setCountry(profile.country || '');
            setAge(profile.name || 40);


        } catch(err) {
            setError(err.message);
        }
        setFetching(false)
    }

    async function onFormSubmitted(e) {
        e.preventDefault();
        setLoading(true);
        try {
            profile.name= name;
            profile.surname= surname;
            profile.country= country;
            profile.age= age;
            await ProfileService.saveProfile(profile);
            setMessage('Profile succesfully saved');
            setError('');

        } catch(err) {
            setError(err.message);

        }
        setLoading(false);

        //ProfileService.saveProfile()

    }


  return (
    <>
    {
        fetching ?
        <div className='text-center mt-3'>
            <Spinner />
        </div>
        :
    
    <div className='container my-4'>

        
        <div className='card card-body'>
            <h1>User Profile</h1>
            <p>Enter your details</p>

            <hr></hr>

            <form onSubmit={onFormSubmitted}>
            <div className="mb-3">
                        <label className="form-label">
                            Name
                        </label>
                        <input
                            required
                            //the next two lines are two-way binding
                            value={name} //when we change the email state, it updates in the input
                            onChange = {(e) => setName(e.target.value)} //when we change email in the input (ie typing it in), it changes the state
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Surname
                        </label>
                        <input
                            required
                            //the next two lines are two-way binding
                            value={surname} //when we change the email state, it updates in the input
                            onChange = {(e) => setSurname(e.target.value)} //when we change email in the input (ie typing it in), it changes the state
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Country
                        </label>
                        <input
                            required
                            //the next two lines are two-way binding
                            value={country} //when we change the email state, it updates in the input
                            onChange = {(e) => setCountry(e.target.value)} //when we change email in the input (ie typing it in), it changes the state
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Age
                        </label>
                        <input
                            required
                            //the next two lines are two-way binding
                            value={age} //when we change the email state, it updates in the input
                            onChange = {(e) => setAge(e.target.value)} //when we change email in the input (ie typing it in), it changes the state
                            type="number"
                            className="form-control"
                        />
                    </div>

                    <Button
                    className='px-5'
                    type='submit'
                    loading={loading}>
                        Save profile
                        
                    </Button>
            </form>
            <Alert className='mt-3' show={error} onClose={() => setError('')}>
                {error}
            </Alert>
            <Alert variant='success'className='mt-3' show={message} onClose={() => setMessage('')}>
                {message}
            </Alert>

        </div>

    </div>
    
    }
    </>
  )
}
