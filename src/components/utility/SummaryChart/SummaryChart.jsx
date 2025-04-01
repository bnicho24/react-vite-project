import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
  // import { ChartConfig } from "@/components/ui/chart"
import { Button } from '@/components/ui/button'


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "hsl(var(--chart-2))",
  // },
}

const SummaryChart = (props) => {
// console.log(props)
  const { chartData, } = props;
  console.log('chartData', chartData)

  
  // const chartDatas = [
  //   { category: "Students", question1: 5, question2: 4, question3: 1, question4: 4, question5: 2},
  //   { category: "Teachers", question1: 2, question2: 5, question3: 1, question4: 3, question5: 4},
  //   { category: "Headmaster", question1: 3, question2: 3, question3: 2, question4: 5, question5: 1},
  // ]

  return (
    <Dialog>
    <DialogTrigger>
    <Button className="mt-3 cursor-pointer" type="submit">Rating Summary</Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Rating Summary</DialogTitle>
        <DialogDescription>

          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={true}
                tickMargin={10}
                axisLine={true}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="question1" fill="red" radius={4} />
              <Bar dataKey="question2" fill="green" radius={4} />
              <Bar dataKey="question3" fill="blue" radius={4} />
              <Bar dataKey="question4" fill="yellow" radius={4} />
              <Bar dataKey="question5" fill="orange" radius={4} />

            </BarChart>
          </ChartContainer>
            
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
    </Dialog>
  )
}

export default SummaryChart