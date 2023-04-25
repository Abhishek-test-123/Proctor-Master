import cv2

# Load the pre-trained face detection model
face_cascade = cv2.CascadeClassifier(r'haarcascade_frontalface_default.xml')

# Initialize the video capture device
cap = cv2.VideoCapture(0)

while True:
    # Read a frame from the video stream
    ret, frame = cap.read()

    # Convert the frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the grayscale frame
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    # Check if there are multiple faces in the frame
    if len(faces) > 1:
        print("Someone else is sitting in front of the computer!")
    elif len(faces) == 0:
        print("No face detected!")
    else:
        # Get the coordinates of the face
        (x, y, w, h) = faces[0]

        # Check if the student is looking away from the screen
        if x < 100 or x + w > 500:
            print("Student is looking away from the screen!")
        else:
            print("Student is looking at the screen.")

    # Display the resulting frame
    cv2.imshow('frame', frame)

    # Check for user input to exit
    if cv2.waitKey(1) == ord('q'):
        break

# Release the video capture device and close all windows
cap.release()
cv2.destroyAllWindows()
