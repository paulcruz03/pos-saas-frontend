import { useParams } from "@tanstack/react-router"

export default function ViewOrderPage() {
  const { orderId } = useParams({ strict: false })
  return (
    <div>
      <h1>View Order {orderId}</h1>
      <p>This is the detail page for order {orderId}.</p>
      <p>Here you can view all the details related to this order.</p>
    </div>
  )
}