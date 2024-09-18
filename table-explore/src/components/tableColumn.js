/*
 * @Author: liwz
 * @Date: 2024-09-18 11:15:30
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-18 15:07:36
 * @FilePath: /study_new/table-explore/src/components/tableColumn.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
export const tableColumns = [
  {
    title: '种类',
    align: 'center',
    children: [
      {
        title: '省份',
        field: 'province',
        align: 'left',
        width: 60
      },
      {
        title: '县市',
        field: 'county',
        align: 'left',
        width: 80
      },
      {
        title: '产品家族',
        field: 'products',
        align: 'left',
        width: 80
      },
      {
        title: '产品',
        field: 'product',
        align: 'left',
        width: 80
      }
    ]
  },
  {
    title: '2021',
    align: 'left',
    children: [
      {
        title: 'Q1',
        align: 'left',
        children: [
          {
            title: '一月',
            field: 'january',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'oneSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'oneProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '二月',
            field: 'february',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'twoSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'twoProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '三月',
            field: 'march',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'threeSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'threeProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '小计',
            field: 'oneTotal',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'oneSalesTotal',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'oneProfitTotal',
                align: 'left',
                width: 80
              }
            ]
          }
        ]
      },
      {
        title: 'Q2',
        align: 'left',
        children: [
          {
            title: '四月',
            field: 'april',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'fourSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'fourProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '五月',
            field: 'may',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'fiveSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'fiveProfit',
                align: 'left',
                width: 80
              }
            ]
          },

          {
            title: '六月',
            field: 'june',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'sixSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'sixProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '小计',
            field: 'twoTotal',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'towSalesTotal',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'twoProfitTotal',
                align: 'left',
                width: 80
              }
            ]
          }
        ]
      },
      {
        title: 'Q3',
        align: 'left',
        children: [
          {
            title: '七月',
            field: 'july',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'sevenSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'sevenProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '八月',
            field: 'august',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'eightSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'eightProfit',
                align: 'left',
                width: 80
              }
            ]
          },

          {
            title: '九月',
            field: 'september',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'nineSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'nineProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '小计',
            field: 'threeTotal',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'threeSalesTotal',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'threeProfitTotal',
                align: 'left',
                width: 80
              }
            ]
          }
        ]
      },
      {
        title: 'Q4',
        field: 'product',
        align: 'left',
        children: [
          {
            title: '十月',
            field: 'october',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'tenSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'tenProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '十一月',
            field: 'November',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'elevenSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'elevenProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '十二月',
            field: 'december',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'twelveSales',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'twelveProfit',
                align: 'left',
                width: 80
              }
            ]
          },
          {
            title: '小计',
            field: 'fourTotal',
            align: 'left',
            children: [
              {
                title: '销售额',
                field: 'fourSalesTotal',
                align: 'left',
                width: 80
              },
              {
                title: '利润',
                field: 'fourProfitTotal',
                align: 'left',
                width: 80
              }
            ]
          }
        ]
      }
    ]
  }
]
