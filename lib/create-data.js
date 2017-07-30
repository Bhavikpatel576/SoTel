import { datas } from './client'

export default async ({
  title,
  createdAt,
  description,
  tags,
  done = false,
  power_level = 0,
  status,
  timestamp,
  device_type,
  mac_addr,
  rssi,
  data_rate,
  gps,
  bandwidth,
}) => {
  await datas.newDocument().mutate({
    title,
    description,
    createdAt,
    tags,
    done,
    power_level,
    status,
    timestamp,
    device_type,
    mac_addr,
    rssi,
    data_rate,
    gps,
    bandwidth,
  })
}
