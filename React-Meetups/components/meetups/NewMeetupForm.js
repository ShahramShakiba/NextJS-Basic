import { useRef } from 'react';

import Card from '../ui/Card';

export default function NewMeetupForm({ onAddMeetup }) {
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();
  const titleInputRef = useRef();
  const imageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title"> Meetup Title </label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className="control">
          <label htmlFor="image"> Meetup Image </label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className="control">
          <label htmlFor="address"> Address </label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className="control">
          <label htmlFor="description"> Description </label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className="actions">
          <button> Add Meetup </button>
        </div>
      </form>
    </Card>
  );
}
