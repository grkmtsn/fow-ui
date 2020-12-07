import moment from 'moment-timezone';

const timeZoneNames = moment.tz.names();

const timeZones = timeZoneNames.map((item, idx) => ({ id: idx + 1, title: item }));

export default timeZones;
