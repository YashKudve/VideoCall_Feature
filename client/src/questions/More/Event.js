import TimeLine from "./TimeLine";

function Event(){
    const events=[
        {
            heading:"Event1",
            subHeading:"hfridhv",
            direction:"right",
        },
        {
            heading:"Event1",
            subHeading:"kjnf",
            direction:"left",
        },
        {
            heading:"Event1",
            subHeading:"kjdfnk",
            direction:"right",
        },
    ];
    return (
        <div>
            <TimeLine events={events} />
        </div>
    );
}
export default Event;