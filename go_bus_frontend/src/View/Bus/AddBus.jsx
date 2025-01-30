
import BusInfo from './BusInfo';
import BusAmenities from './BusAmenities';
import BusSchedules from './BusSchedules';
const AddBus = () => {
    return (
      <div className="container py-5">
        <div className="card p-4 shadow-lg w-100">
          <h1 className="text-center mb-4">Add Bus</h1>
          <BusInfo />
          <BusAmenities />
          <BusSchedules />
          <div className="text-center mt-4">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    );
}
export default AddBus;